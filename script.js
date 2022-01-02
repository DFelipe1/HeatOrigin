const LinksSocialMedia = {
        github: '',
        youtube: '',
        facebook: '',
        instagram: '',
        twitter: '',
        streamPlataform: '',
        stream: '',
    }

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class').split(' ')

        
        
        
        li.children[0].href = `https://${social[0]}.com/${LinksSocialMedia[social[0]]}`
    }
}


function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent =data.login

        })
}


function conect() {
    


    for(let i in LinksSocialMedia){
        const social = document.getElementById(`${i}`).value 

        
        
        
        if(social == ""){
            alert(`Preenca os campos do formulario`)
            return
        } else {
            LinksSocialMedia[i] = social
            
        }
    }

    createContentGracha()
}

const button = document.querySelector('.btn')

button.addEventListener('click', (e) => {
    e.preventDefault();

    conect()
})

function createContentGracha() {
    const content = document.querySelector(".content")

    for( let i of content.children){
        
        content.remove(i)
        
    } 

    const Main = document.getElementById('container')
    const newContent = document.createElement('div')
    newContent.classList.add('content')

    // --- Class avatar --- 
        const avatar = document.createElement('div')
        avatar.classList.add('avatar')

        const imgBuild = document.createElement('img')
        imgBuild.classList.add('build')
        imgBuild.src = './images/build.svg'

        createChild(avatar, imgBuild)

        

        const avatardiv = document.createElement('div')
        const userImg = document.createElement('img')
        userImg.id = 'userImage'
        
        createChild(avatardiv, userImg);
        createChild(avatar, avatardiv);
        createChild(newContent, avatar)

    // --- Class avatar end ---

    // --- Class user-info --- 
        
        const userInfo = document.createElement('div')
        userInfo.classList.add('user-info')

        // Node 1 Name
            const userName = document.createElement('h1')
            userName.id = 'userName'
            userName.classList.add('name')

            createChild(userInfo, userName);

        // Node 2 Link Github
            const userLink = document.createElement('a')
            userLink.id = 'userLink'
            userLink.classList.add('login-github')

                const imgGithub = document.createElement('img')
                imgGithub.src = '/images/github.svg'

                // Add Image github
                createChild(userLink, imgGithub)

                const userLogin = document.createElement('span')
                userLogin.id = 'userLogin'

                 // Add Login github
                createChild(userLink, userLogin)

            // Add Link Github in userInfo
            createChild(userInfo, userLink)

        // Node 3 bio
            const userBio = document.createElement('p')
            userBio.id = 'userBio'
            userBio.classList.add('bio')
            // Add Bio in userInfo
            createChild(userInfo, userBio)

        // Node 4 socialLinks
            const SocialLinks = document.createElement('div')
            SocialLinks.id = 'socialLinks'
            SocialLinks.classList.add('social-links')


                for( i in LinksSocialMedia){
                    if(i == 'streamPlataform'){
                        createLi(LinksSocialMedia[i], SocialLinks)
                    }
                    if(i != 'github' && i != 'stream' && i != 'streamPlataform'){
                        createLi(i, SocialLinks)
                    }
                }
                
                
                        

            createChild(userInfo, SocialLinks)


        createChild(newContent, userInfo)



    
    Main.appendChild(newContent)

    changeSocialMediaLinks()
    getGithubProfileInfos()
   
}


function createChild(dad, children) {
    dad.appendChild(children)
}

function createLi(name, nodeDad){

    const li = document.createElement('li')
                li.classList.add(`${name}`)
                li.classList.add('cardSociallink')


                // Criar uma factory de LI

                const link = document.createElement('a')
                    link.target ='_blank'

                        const socialImg = document.createElement('img')
                        socialImg.classList.add(`${name}`)
                        socialImg.src = `/images/${name}.svg`

                        createChild(link, socialImg)

                        const linkDiv = document.createElement('div')

                        createChild(link, linkDiv)

                    createChild(li, link)

                createChild(nodeDad, li)
}