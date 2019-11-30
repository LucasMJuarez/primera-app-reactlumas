import React, { Component } from 'react'

export default class Posts extends Component {


    state= { 
        posts: []
    }

    //obtenemos los datos antes que se pinten en panatalla

    async componentDidMount(){ //este metodo se ejecuta una vez q el componente ya ha sido cargado
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json();
        this.setState({posts :data })
        //hace una petiion a esta url
    }
    //le avisamos q es una cantidad de datos grandes
    //que va a tardar por eso el async y el await para indicar que espere
 
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post =>{
                        return <div key={post.id}>
                            <h1>{post.title} </h1>
                            <p>{post.body} </p>
                        </div>
                    })
                }
            </div>
        )
    }
}
