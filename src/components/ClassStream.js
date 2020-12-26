import React, { Component } from 'react'
import styled, {css} from 'styled-components'

// import lorem from './images/lorem.png';
import attachment from './images/attachment.png';
import dropdownvector from './images/dropdownvector.png';
import sendComment from './images/sendComment.png';

const Div = styled.div`
    scroll-behavior: smooth;
    &::--webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`
const DisplayContainer = styled(Div)`
    width: fit-content;
    min-height: 100vh;
    height: fit-content;
`
const InputPanel = styled(Div)`
    position: absolute;
    width: 1083px;
    height: 204px;
    left: 78px;
    top: 42px;

    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
`
const InputTextArea = styled.textarea` 
    position: absolute;
    width: 1020px;
    height: 98px;
    left: 25.5px; 
    top: 18px; 
    resize: none;

    padding: 10px;
    background: #FAFAFA;
    border: 0;
    border-radius: 15px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;

    color: #BABABA;
`
const CancelButton = styled(Div)`
    position: absolute;
    bottom: 25px;
    left: 70px;

    font-size: 17px;
    line-height: 20px;

    color: #EF3E36;
`
const Icon = styled(Div)`
    position: relative;
    height: 28px;
    padding: 11px;
`
const AttachmentButton = styled(Div)`
    position: absolute;
    right: 235px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    border-radius: 25px;

    background: #FFC480;
`
const PostDropDown = styled(Div)`
    position: absolute;
    bottom: 10px;
    right: 27px;

    width: 180px;
    height: 50px;

    display: grid;
    grid-template-areas: "display" "dropdown";
    grid-template-rows: 50px 1fr;
    grid-template-columns: 1fr; 
    
    border-radius: 11px;
`
const DropDownDisplay = styled(Div)`
    grid-area: display;

    display: grid;
    grid-template-areas: "text button";
    grid-template-rows: 50px; 
    grid-template-columns: 140px 40px;
    
    font-size: 20px;
    line-height: 24px;
`
const DropDownTextContainer = styled(Div)`
    grid-area: text;

    border-radius: 11px 0 0 11px;
    background: #FF6C40;
    color: #F2D8D5;
`
const DropDownText = styled(Div)`
    position: absolute;
    top: 13px;
    left: 35px;

    color: #F2D8D5;
`
const DropDownButton = styled(Div)`
    grid-area: button;
    background: #FFC480;
    border-radius: 0 11px 11px 0;
`
const DropDownOptionsContainer = styled(Div)`
    grid-area: dropdown;
    width: 140px;

    color: GREY;
    background: #F2D8D5;
    overflow: hidden;
    border-radius: 5px;

    ${ props => props.expand === true && css `
    padding-top: 5px;
        height: 75px;
    `};
    ${ props => props.expand === false && css `
        height: 0px;
    `};
        
    transition: height 0.5s cubic-bezier(.77,0,.175,1);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    z-index: 5;
`
const DropDownOption = styled(Div)`
    height: 30px;
    width: 95px;
    margin: 5px auto;
    padding-left: 35px;

    border-bottom: 0.5px dashed white;
`
const PostsContainer = styled(Div)`
    position: absolute;
    top: 278px;
    left: 78px;

    width: 1083px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    overflow: hidden;
`
const Post = styled(Div)`
    width: 1016px;
    height: fit-content;
    margin-bottom: 28px;
    padding-right: 44px;

    display: grid;
    grid-template-areas: "image details";
    grid-template-rows: 1fr;
    grid-template-columns: 110px 1fr; 
    
    background: #FFFFFF;
    border-radius: 11px;
    
    font-family: SF Pro Display;
    font-style: normal;

    ${ props => props.allowComment === true && css `
        grid-template-areas: "image details" "comment comment";
        grid-template-rows: 1fr 89px;
        grid-template-columns: 110px 1fr;
    `};

`
const PostUserImage = styled(Div)`
    grid-area: image;

    position: relative;
    top: 15px;
    left: 15px;

    width: 59.54px;
    height: 59.54px;

    background: ${props => props.imagUrl || "lightgrey"}; 
    border: 1px dashed GREY;
    border-radius: 15px;
`
const PostDetails = styled(Div)`
    grid-area: details;

    display: grid;
    grid-template-areas: "username" "text";
    grid-template-rows: 71px 1fr;
    grid-template-columns: 1fr; 
`
const Username = styled(Div)`
    grid-area: username;
    margin: auto 0;

    font-weight: 600; //normal;
    font-size: 17px;
    line-height: 20px;
`
const PostText = styled(Div)`
    grid-area: text;
    margin: auto 0 36px 0;
    height: fit-content;

    font-weight: 200;
    font-size: 17px;
    line-height: 20px;
`
const CommentContainer = styled(Div)`
    grid-area: comment;
    width: 1060px;
    height: 89px;
    background: #FAFAFA;
    border-radius: 0px 0px 15px 15px;
    
    display: grid;
    grid-template-areas: "image commentinput button";
    grid-template-rows: 1fr;
    grid-template-columns: 110px 1fr 80px; 
    
`
const CommentImageContainer = styled(Div)`
    grid-area: image;

    position: relative;
    top: 20px;
    left: 34px;

    width: 42px;
    height: 42px;

    background: ${props => props.imagUrl || "lightgrey"};
    border: 1px dashed GREY;
    border-radius: 15px;
`
const CommentInput = styled.textarea`
    grid-area: commentinput;

    padding: 10px;
    position: relative;
    width: 845px;
    height: 45px;
    left: 0px;
    top: 10px;
    resize: none;

    background: #FAFAFA;
    border: 0;
    border-radius: 10px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;

    color: #D3D3D3;
`
const CommentButton = styled(Div)`
    grid-area: button;
    position: relative;

    padding: 29px 22px;
`

class ClassStream extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Posts: [
                {
                    username: "user1",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
                },
                {
                    username: "user2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    username: "user3",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."                
                } 
                
            ],
            isDropDownOpen: false,
            newPostText: "",
            newCommentText: ""
        }
    }
 
    handleDropDownButtonClick = () => {
        this.setState({ isDropDownOpen: !this.state.isDropDownOpen })
    }

    handlePostInputChange = (event) => {
        this.setState({ newPostText: event.target.value });
    }
    handleCancelPostButtonClick = () => {
        this.setState({ newPostText: "" })
    }
    handlePostButtonClick = () => {
        const {newPostText} = this.state
        if(newPostText !== "") {
            var newPost = {
                username: "user",
                text: newPostText
            }
            this.setState({
                Posts: [newPost, ...this.state.Posts],
                newPostText: ""
            })
        }
        else {
            alert('input area empty!')
        }
    }

    handleCommentInputChange = (event) => {
        this.setState({ newCommentText: event.target.value });
    }

    render() {
        const {Posts, isDropDownOpen } = this.state

        const POSTS = Posts.map((post, i) => {
            if(i === 0) {
                return (
                    <Post allowComment={true} key={`post_${i}`}>
                        <PostUserImage></PostUserImage>
                        <PostDetails>
                            <Username> {post.username} </Username>
                            <PostText> {post.text}  </PostText>
                        </PostDetails>
                        <CommentContainer>
                            <CommentImageContainer></CommentImageContainer>
                            <CommentInput
                                id="comment input area"
                                placeholder="Write comment here..."
                                value={this.state.newCommentText}
                                onChange={this.handleCommentInputChange}
                            />
                            <CommentButton>
                                <img src={sendComment} alt="comment button"/>
                            </CommentButton>
                        </CommentContainer>
                    </Post>
                )
            }
            else {
                return (
                    <Post key={`post_${i}`}>
                        <PostUserImage></PostUserImage>
                        <PostDetails>
                            <Username> {post.username} </Username>
                            <PostText> {post.text} </PostText>
                        </PostDetails>
                    </Post>
                )
            }
        })
        return (
            <DisplayContainer>
                <InputPanel>
                    <InputTextArea
                        id="Post input area"
                        placeholder="Share something with your class..."
                        value={this.state.newPostText}
                        onChange={this.handlePostInputChange}
                    />
                    <CancelButton> Cancel </CancelButton>
                    <AttachmentButton>
                        <Icon > <img src={attachment} alt="attachment button"/></Icon>
                    </AttachmentButton>
                    <PostDropDown>
                        <DropDownDisplay>
                            <DropDownTextContainer
                                onClick={this.handlePostButtonClick}
                            >
                                <DropDownText> share </DropDownText>
                            </DropDownTextContainer>
                            
                            <DropDownButton 
                                onClick={this.handleDropDownButtonClick}> 
                                <Icon><img src={dropdownvector} alt="dropdown button"/> </Icon>   
                            </DropDownButton>
                        </DropDownDisplay>
                        <DropDownOptionsContainer
                            expand={isDropDownOpen}
                        >
                            <DropDownOption> share </DropDownOption>
                            <DropDownOption> option 2 </DropDownOption>
                        </DropDownOptionsContainer>
                    </PostDropDown>
                </InputPanel>
                    <PostsContainer>
                        {POSTS}
                    </PostsContainer>
            </DisplayContainer>
        )
    }
}

export default ClassStream