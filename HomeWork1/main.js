const lessons = [{
        lesson: "Урок1",
        date: "Дата1",
        maximum: 5,
        current: 1,
    },
    {
        lesson: "Урок2",
        date: "Дата2",
        maximum: 20,
        current: 4,
    },
    {
        lesson: "Урок3",
        date: "Дата3",
        maximum: 3,
        current: 0,
    },
    {
        lesson: "Урок4",
        date: "Дата4",
        maximum: 30,
        current: 30,
    },
    {
        lesson: "Урок5",
        date: "Дата5",
        maximum: 10,
        current: 9,
    },
    {
        lesson: "Урок6",
        date: "Дата6",
        maximum: 30,
        current: 24,
    },
]

const lesson = document.querySelector(".lessons")

for (const item of lessons) {
    // Блок урока
    const element = document.createElement("div")
    lesson.appendChild(element)

    const header = document.createElement("h2")
    header.textContent = item.lesson
    element.appendChild(header)

    const date = document.createElement("p")
    date.textContent = `Дата: ${item.date}`
    element.appendChild(date)

    const current = document.createElement("p")
    current.classList.add("current")
    current.textContent = `Текущее количество человек: ${item.current}`
    element.appendChild(current)

    const maximum = document.createElement("p")
    maximum.classList.add("maximum")
    maximum.textContent = `Максимальное количество человек: ${item.maximum}`
    element.appendChild(maximum)

    const subscribe = document.createElement("button")
    subscribe.textContent = "Записаться"
    // Увеличение количества людей
    subscribe.addEventListener("click", () => {
        if (item.current != item.maximum) {
            item.current += 1

            current.textContent=`Текущее количество человек: ${item.current}`
        }
    })
    element.appendChild(subscribe)

    const unSubscribe = document.createElement("button")
    unSubscribe.textContent = "Отменить запись"
    // Уменьшение количества людей
    unSubscribe.addEventListener("click", () => {
        if (item.current != 0) {
            item.current -= 1

            current.textContent=`Текущее количество человек: ${item.current}`
        }
    })
    element.appendChild(unSubscribe)
}