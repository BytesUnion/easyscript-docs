import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import '../styles/MarkdownPage.css';

const MarkdownPage = () => {
    const { language, '*': page } = useParams();
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`/api/markdown/${language}/${page}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let text = await response.text();

                const frontMatterMatch = text.match(/---\s*([\s\S]*?)\s*---/);
                if (frontMatterMatch) {
                    const frontMatter = frontMatterMatch[1];
                    const nameMatch = frontMatter.match(/name="([^"]+)"/);
                    const title = nameMatch ? nameMatch[1] : 'Untitled';
                    setTitle(title);
                    text = text.replace(/---\s*[\s\S]*?\s*---/, '');
                } else {
                    setTitle('Untitled');
                }

                setContent(text);
            } catch (error) {
                console.error('Error fetching markdown content:', error);
                setContent(t('contentNotFound'));
            }
        };

        fetchContent();
    }, [language, page, t]);

    return (
        <div className="markdown-container">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownPage;