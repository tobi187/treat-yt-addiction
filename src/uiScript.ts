const wt_in = document.querySelector(".t-input")


wt_in?.addEventListener("keyup",(ev) => {
    if  ((ev as KeyboardEvent).key !== "Enter") return
    const whitey = document.querySelector("#whitelist")
    
    const li = document.createElement("li")
    li.classList.add("wt-el")
    const input = document.createElement("input") 
    input.type = "checkbox"
    const span = document.createElement("span")
    span.textContent = wt_in.textContent
    const fa_el = document.createElement("i")
    fa_el.classList.add("fa-solid fa-circle-xmark wt-rm")

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(fa_el)

    wt_in!.textContent = ""
    whitey?.appendChild(li)
})