import React from 'react';
import {Container,Grid, Image, Header, Segment, Icon} from 'semantic-ui-react';
import {useParams} from 'react-router-dom';
import firebase from '../utils/firebase';

function Post(){
    const{postId}=useParams();
    const[post, setPost]=React.useState({
        author:{},
    });

    React.useEffect(()=>{
    firebase
        .firestore()
        .collection('posts')
        .doc(postId)
        .onSnapshot((docSnapshot)=>{
            const data = docSnapshot.data();
            setPost(data);
        });
    }, []);

    function toggleLiked(){
        const uid =firebase.auth().currentUser.uid;
        if(isLiked){
            firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .update({
            likedBy: firebase.firestore.FieldValue.arrayRemove(uid),
            });
        }else{
            firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .update({
            likedBy: firebase.firestore.FieldValue.arrayUnion(uid),
            });
        }
    }

    const isLiked=post.LikeBy ?.includes(
        firebase.auth().currentUser.uid
    );

    return ( 
    <Container>
        <Grid>
            <Grid.Row>
                <Grid.Column width={3}>空白</Grid.Column>
                <Grid.Column width={10}>
                    {post.author.photoURL ? (
                        <Image src={post.author.photoURL}/>
                        ) : (
                            <Icon name="user circle" />
                    )}
                    {post.author.displayName || '使用者'}
                    <Header>
                        {post.title}
                    </Header>
                    <Image src={post.imageUrl} />
                    <Segment basic vertical> 
                        {post.content}
                    </Segment>
                    <Segment basic vertical>
                        留言·0·讚·{post.likedBy?.length || 0}
                        <Icon 
                        name={`thumbs up${isLiked ? '' : '  outline'}`} 
                        color={isLiked ? 'blue' : 'grey'}
                        link
                        onClick={toggleLiked} 
                        />                
                    </Segment>
                </Grid.Column>
                <Grid.Column width={3}>空白</Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    );
}

export default Post;