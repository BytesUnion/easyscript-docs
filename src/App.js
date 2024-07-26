import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MarkdownPage from './components/MarkdownPage';
import './styles/App.css';
import i18n from './i18n';

import enFlag from './assets/flags/en.svg';
import uaFlag from './assets/flags/ua.svg';
import githubLogo from './assets/logos/github.svg';

const Sidebar = ({ pages, mobileMenuOpen, setMobileMenuOpen }) => {
    const renderPages = (pages) => {
        const sortedPages = [...pages].sort((a, b) => {
            const queueA = (typeof a.queue !== 'undefined' ? a.queue : Number.MAX_SAFE_INTEGER);
            const queueB = (typeof b.queue !== 'undefined' ? b.queue : Number.MAX_SAFE_INTEGER);
            const queueInFolderA = (typeof a.queue_in_folder !== 'undefined' ? a.queue_in_folder : Number.MAX_SAFE_INTEGER);
            const queueInFolderB = (typeof b.queue_in_folder !== 'undefined' ? b.queue_in_folder : Number.MAX_SAFE_INTEGER);

            if (queueA === queueB) {
                return queueInFolderA - queueInFolderB;
            }

            return queueA - queueB;
        });

        return sortedPages.map((page, index) => (
            <li key={index}>
                {page.type === 'folder' ? (
                    <details>
                        <summary className="folder-summary">{page.text || page.name}</summary>
                        <ul>{renderPages(page.children)}</ul>
                    </details>
                ) : (
                    <NavLink
                        to={page.path}
                        className={({isActive}) => isActive ? 'active-link' : ''}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {page.name}
                    </NavLink>
                )}
            </li>
        ));
    };

    return (
        <nav className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
                {renderPages(pages)}
            </ul>
        </nav>
    );
};

const App = () => {
    const { t } = useTranslation();
    const [pages, setPages] = useState([]);
    const [language, setLanguage] = useState(i18n.language.split('-')[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.toggle('no-scroll', mobileMenuOpen);
    }, [mobileMenuOpen]);

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const response = await fetch(`/api/pages?language=${language}`);
                const data = await response.json();
                setPages(data);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        };

        fetchPages();
    }, [language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
        setDropdownOpen(false);

        const currentPath = location.pathname.split('/').slice(2).join('/');
        navigate(`/${lng}/${currentPath}`);
    };

    const getFlag = () => {
        return language === 'en' ? enFlag : uaFlag;
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="App">
            <header className="header">
                <div className="header-content">
                    <div className="easyscript-text">EasyScript</div>
                    <div className={`header-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    </div>
                    <a href="https://github.com/BytesUnion/EasyScript" target="_blank" rel="noopener noreferrer"
                       className="github-icon">
                        <img src={githubLogo} alt="GitHub" className="github-logo"/>
                    </a>
                    <div className="language-selector">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-button">
                            <img src={getFlag()} alt={language}/>
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <div onClick={() => changeLanguage('en')} className="dropdown-item">
                                    <img src={enFlag} alt="English"/>
                                </div>
                                <div onClick={() => changeLanguage('ua')} className="dropdown-item">
                                    <img src={uaFlag} alt="Українська"/>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                        ☰
                    </button>
                </div>
            </header>
            <div className={`main-content ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <Sidebar pages={pages} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                <div className="content">
                    <Routes>
                        <Route path="/:language/*" element={<MarkdownPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
