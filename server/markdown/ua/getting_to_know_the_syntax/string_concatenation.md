---
    name="Конкатенація рядків"
    queue_in_folder=5
---

## Конкатенація рядків
В EasyScript ви можете конкатенувати (об'єднувати) рядки за допомогою оператора `+`.

```easyscript
greeting = "Привіт, " + "світ!"
print(greeting)   >> Вивід: Привіт, світ!

name = "EasyScript"
welcomeMessage = "Ласкаво просимо до " + name
print(welcomeMessage)   >> Вивід: Ласкаво просимо до EasyScript
```

Зверніть увагу, що ви не можете приєднати інші типи даних до рядків, для цього вам потрібно буде використати метод .asString() після його вставки.

```easyscript
age = 20
message = "Вік: " + age.asString()
print(message)   >> Вивід: Вік: 20
```