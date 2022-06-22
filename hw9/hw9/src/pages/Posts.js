import React from "react";
import { Grid, Item, Image, Icon, Container, ItemExtra } from "semantic-ui-react";
import firebase from "../utils/firebase";
import{Link}from 'react-router-dom'

function Posts() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        firebase
            .firestore()
            .collection("posts")
            .get()
            .then((collectionSnapshot) => {
                const data = collectionSnapshot.docs.map((docSnapshot) => {
                    const id = docSnapshot.id;
                    return { ...docSnapshot.data(), id };
                });
                setPosts(data);
            });
    }, []);

    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>空白</Grid.Column>
                    <Grid.Column width={10}>
                        <Item.Group>
                            {posts.map((post) => {
                                return (
                                    <Item key={post.id } as={Link} to={`/posts/${post.id}`} >
                                        <Item.Image src={
                                            post.imageUrl || "https://react.semantic-ui.com/images/wireframe/image.png"
                                        } />
                                        <Item.Content>
                                            <Item.Meta>
                                                {post.author.photoURL ? (
                                                    <Image src={post.author.photoURL} />
                                                ) : (
                                                    <Icon name="user circle" />
                                                )}
                                                {post.author.displayName || '使用者'}
                                            </Item.Meta>
                                            <Item.Header>{post.title}</Item.Header>
                                            <Item.Description>{post.content}</Item.Description>
                                            <ItemExtra>
                                                留言.0.讚.{post.likedBy?.length || 0} .
                                            </ItemExtra>
                                        </Item.Content>
                                    </Item>
                                );
                            })}
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={3}>空白</Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Posts;