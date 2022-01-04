
console.log('哈哈')
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement("li")
                    li.textContent = item.id
                    lis.appendChild(li)
                })
                n += 1
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/requestJSON.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('挑战五: 请求JSON')
                const object = JSON.parse(request.response)
                myName.textContent = object["name"]
            }
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'requestXML.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('挑战四: 请求XML')
                const xml = request.responseXML
                const divXML = document.createElement('div')
                divXML.innerHTML = xml.getElementsByTagName('warning')[0].textContent
                document.body.appendChild(divXML)
            }
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/requestHTML.html')
    request.onload = () => {
        console.log('挑战三: 请求HTML')
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log(失败了)
    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/requestJS.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css') //readyState = 1
    request.onreadystatechange = () => {
        //下载完成，但还有判断是成功2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('挑战一 : 请求CSS')
                //创建 style 标签
                const style = document.createElement('style')
                //填写 style 内容
                style.innerHTML = request.response
                //把 style 插到头里面
                document.head.appendChild(style)
            } else {
                console.log('加载CSS失败')
            }
        }
    }
    request.send() //readyState = 2
}
