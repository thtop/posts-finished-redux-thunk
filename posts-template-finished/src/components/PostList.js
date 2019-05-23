import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends React.Component {

    // Add function
    componentDidMount() {
        console.log('PROPS: ', this.props)

        this.props.fetchPosts()
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="huge middle aligned icon node green"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

// Add function
const mapStateToProps = state => {
    console.log('STATE: ', state)
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)