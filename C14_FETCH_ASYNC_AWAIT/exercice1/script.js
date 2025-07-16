
async function postArray() {
    const reponse = await fetch('https://dummyjson.com/posts');
    const data = await reponse.json()
    let dive = document.getElementById('dive')
    for (let i = 0; i < data.posts.length; i++) {

        let titre = document.createElement("h2")
        dive.appendChild(titre)
        titre.innerHTML = data.posts[i].title

        let para = document.createElement("p")
        dive.appendChild(para)
        para.innerHTML = data.posts[i].body
    }
}
postArray()


