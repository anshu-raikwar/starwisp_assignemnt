import React, { Component } from 'react';
import styled, {css} from 'styled-components'

import search from './images/search.png';
import save from './images/save.png';
import back from './images/back.png';
import deleteIcon from './images/delete.png';
import pencil from './images/pencil.png';
import thismonthgraph from './images/thismonthgraph.png';
import thismonthgraphshadow from './images/thismonthgraphshadow.png';
import lastmonthgraph from './images/lastmonthgraph.png';
import lastmonthgraphshadow from './images/lastmonthgraphshadow.png';
import salesreport from './images/salesreport.png';
import Frame from './images/Frame.png';

const Div = styled.div`
    scroll-behavior: smooth;
    &::--webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
`
const DisplayContainer = styled(Div)`
    width: 1489px;
    height: 1084px;
`
const SearchInputContainer = styled(Div)`
    position: absolute;
    top: 42px;
    left: 88px;

    width: 836px;
    height: 40px;

    background: #E2E2E2;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border: 2px solid #E2E2E2;
    border-radius: 12px;
`
const SearchIcon = styled(Div)`
    position: absolute;
    left: 0;
    margin: 7px 0 7px 5px;
`
const SearchInput = styled.input`
    position: absolute;
    right: 0px;

    width: 800px;
    height: 36px;

    background: #E2E2E2;
    border: 2px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 12px;
`;
const SalesReportContainer = styled(Div)`
    position: absolute;
    width: 1029px;
    height: 495px;
    left: 62px; 
    top: 105px;

    background: #FFFFFF;
    border-radius: 15px;

    display: grid;
    grid-template-areas: "graph text";
    grid-template-rows: 1fr;
    grid-template-columns: 846px 183px; 
`
const SalesGraphTitle = styled(Div)`
    position: absolute;
    top: 21px;
    left: 21px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;

    color: #593636;
`
const SalesGraphContainer = styled(Div)`
    grid-area: graph;
    border: 1px dashed brown;

    position: absolute;

    width: 755px;
    height: 365px;
    top: 78px;
    left: 59px;

    background: rgba(255, 255, 255, 0.0001);
    border: 0.5px dashed grey;
`
const SalesTextContainer = styled(Div)`
    grid-area: text;

    display: grid;
    grid-template-areas: "date" "stats";
    grid-template-rows: 78px 1fr;
    grid-template-columns: 1fr; 
    
    background: #FF6C40;
    border-radius: 0px 15px 15px 0px;
`
const SalesTextContainerDate = styled(Div)`
    grid-area: date;

    height: 36px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 36px;
    padding-left: 21px;
    color: #FFFFFF;

    align-self: center;

    mix-blend-mode: normal;
    opacity: 0.8;
`
const StatsContainer = styled(Div)`
    grid-area: stats;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`
const StatTile = styled(Div)`
    width: 141px;
    height: 105px;
    border-radius: 15px;
    background: ${props => props.background || "transparent"};
    margin-bottom: 21px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
   
    align-self: center;
`
const TileAmount = styled(Div)`
    margin: 21px auto auto 21px;
    
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #593636;
`
const TileText = styled(Div)`
    margin: 21px auto auto 21px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    
    color: rgba(89, 54, 54, 0.8);
`
const NotificationEventContainer = styled(Div)`
    position: absolute;
    width: 331px;
    height: 677px;
    left: 1123px;
    top: 105px;

    background: #FFFFFF;
    border-radius: 15px;

    display: grid;
    grid-template-areas: "headerContainer"
                        "displayContainer";
    grid-template-rows: 53px 1fr;
    grid-template-columns: 1fr;
    
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
`
const HeaderContainer = styled(Div)`
    grid-area: headerContainer;

    border-radius: 15px 15px 0px 0px ;
    
    display: grid;
    grid-template-areas: "header1 header2";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr; 
`
const Header = styled(Div)`
    position: absolute;
    top: 0;

    width: 150px;
    height: 53px;
    padding: 15px 10px 0px 10px;

    border-radius: 15px 15px 0px 0px;
    font-size: 20px;
    line-height: 24px;

    ${ props => props.left && css `
        left: 0;
    `};
    
    ${ props => props.right && css `
        right: 0;
    `};
       
    ${ props => props.active === true && css `
        background: #FFFFFF;
        color: #494949;
        z-index: 2;
    `};
    ${ props => props.active === false && css `
        background: #FAFAFA;
        color: #B0B0B0;
    `};
`
const HeaderText = styled(Div)`
    height: 30px;
    text-align: center;
`
const DisplayWrapper = styled(Div)`
    grid-area: displayContainer;

    padding: 15px;

    background: #FFFFFF;
    border-radius: 0px 0px 15px 15px;
`
const NEDisplayContainer = styled(Div)`
    position: absolute;

    width: 301px;
    height: 596px;
    overflow: hidden;

    background: #FFFFFF;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
`
const ViewAllButton = styled(Div)`
    position: absolute;
    bottom: 0px;
    left: 115px;

    width: 71px;
    height: 14px;

    padding-top: 7px;
    text-align: center;

    background: #F8F8F8;
    border-radius: 15px 15px 0px 0px;
    
    font-size: 7px;
    line-height: 8px;
    
    color: #756F6F;
    z-index: 5;
`
const NEDisplayScreen = styled(Div)`
    position: absolute;

    width: 321px;
    height: 596px;

    overflow-y: scroll;
    overflow-x: hidden;
`
const ListContainer = styled(Div)`
    width: 295px;
    height: fit-content;
    padding: 10px 0;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`
const Notification = styled(Div)`
    width: 276px;
    height: 70px;
    padding: 10px 0 7px;
    margin: 0 10px 5px 10px;
    border-bottom: 1px solid #ECECEC;
    
    display: grid;
    grid-template-areas: "image body";
    grid-template-rows: 1fr;
    grid-template-columns: 66px 1fr;
`
const Image = styled(Div)`
    grid-area: image;

    width: 46px;
    height: 54px;
    margin: auto;

    background: ${props => props.imageUrl || "lightgrey"};
    box-shadow: 2px 2px 10px lightgrey;
    
    ${ props => props.Event && css `
        border: 0px;
        background: transparent;
        box-shadow: none;

        font-size: 40px;
        line-height: 48px;

        color: #593636;
    `};
`
const Body = styled(Div)`
    grid-area: body;
    padding-left: 6px;
    
    color: #756F6F;
`
const Username = styled(Div)`
    position: relative;
    top: 4px;

    height: 25px;

    font-size: 15px;
    line-height: 18px;

    color: #484848;
`
const Text = styled(Div)`
    position: relative;
    top: 1px;

    height: 17px;

    font-size: 12px;
    line-height: 14px;
`
const Timestamp = styled(Div)`
    position: relative;
    top: 11px;
    
    height: 18px;

    font-size: 7px;
    line-height: 8px;
`
const NotePadContainer = styled(Div)`
    position: absolute;
    width: 367px;
    height: 357px;
    padding: 28px;
    left: 62px;
    top: 634px;

    background: #FFFFFF;
    border-radius: 15px;

    display: grid;
    grid-template-areas: "headerContainer"
                        "displayContainer";
    grid-template-rows: 50px 1fr;
    grid-template-columns: 1fr; 
    grid-area: headerContainer;

    font-family: SF Pro Display;
    font-style: normal;
`
const NotePadButtons = styled(Div)`
    background: #FF6C40;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    text-align: center;

    color: #FFF5F5;
    z-index: 5;
`

const NotePadButton1 = styled(NotePadButtons)`
    position: absolute;   
    right: 15px;      
    ${ props => props.top && css `
        top: 10px; 
        background: transparent;
    `};    
    ${ props => props.bottom && css `
        bottom: 31px; 
    `};
    width: 58px;
    height: 58px;

    border-radius: 29px;
    font-size: 48px;
    line-height: 56px;
`
const NotePadButton2 = styled(NotePadButtons)`
    position: absolute;     
    ${ props => props.left && css `
        top: 20px;
        left: 10px; 
        background: transparent;
    `};    
    ${ props => props.right && css `
        top: 10px;  
        right: 15px; 
    `};
    width: 30px;
    height: 30px;

    border-radius: 15px;
    font-size: 25px;
    line-height: 27px;
 
`

// const AddEditNoteButton = styled(NotePadButtons)`
//     position: absolute;
//     width: 58px;
//     height: 58px;
//     right: 33px; 
//     bottom: 31px; 

//     border-radius: 29px;
//     font-size: 48px;
//     line-height: 56px;
// `

// const BackButton = styled(NotePadButtons)`
//     position: absolute;
//     width: 30px;
//     height: 30px;
//     left: 10px; 
//     top: 10px; 

//     border-radius: 15px;
//     font-size: 25px;
//     line-height: 27px;
// `
// const CancelButton = styled(NotePadButtons)`
//     position: absolute;
//     width: 30px;
//     height: 30px;
//     right: 10px; 
//     top: 10px; 

//     border-radius: 15px;

//     font-size: 25px;
//     line-height: 27px;
// `

const NotePadHeader = styled(Div)`
    grid-area: headerContainer;

    width: 367px; 
    height: 49px;

    font-weight: 300;
    font-size: 30px;
    line-height: 36px;

    color: #593636;
`
const NotePadDisplayContainer = styled(Div)`
    grid-area: displayContainer;

    position: absolute;
    width: 367px;
    height: 307px;
    overflow: hidden;
`
const NotePadDisplayScreen = styled(Div)`
    position: absolute;
    width: 397px;
    height: 307px; 
    overflow-y: scroll;
`
const NotesContainer = styled(Div)`
    position: relative;
    width: 367px;
    height: fit-content;
    padding: 10px 0;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`
const Note = styled(Div)`
    width: 340px;
    height: 32px;

    margin-bottom: 10px;
    padding: 0 5px;

    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #a7a7a7;
    overflow: hidden;
`
const NoteTitle = styled.span`
    color: #000000;
    margin-right: 10px;
`
const FullNoteDisplayTitle = styled(Div)`
    grid-area: headerContainer;

    width: 300px; 
    height: 49px;

    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    margin: auto;

    color: #593636;
`
const FullNoteTextDisplay = styled(Div)`
    position: relative;
    width: 367px;
    height: fit-content;
    padding: 10px 20px 70px;
    box-sizing: border-box;
`
const NoteTitleInput = styled.input`
    grid-area: headerContainer;

    width: 300px; 
    height: 49px;
   
    background: #FAFAFA;
    border: 0;
    border-radius: 15px;

    font-weight: 300;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    margin: auto;

    color: #593636;
`
const NoteTextInput = styled.textarea`
    width: 367px;
    height: 290px;
    box-sizing: border-box;
    padding: 10px 10px 70px;
    margin-top: 10px;
    
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
const GraphContainer = styled(Div)`
    position: absolute;
    width: 323px;
    height: 252px;
    left: 505px;
    top: 631px;
`
const MonthReportContainer = styled(Div)`
    position: absolute;
    width: 235px;
    height: 91px;
    left: 835px; 
    top: ${props => props.top || "635px"};

    padding: 10px;
    border-radius: 20px;
    background: #FFFFFF;

    font-family: Comfortaa;
    font-style: normal;

    display: grid;
    grid-template-areas: "title title" "stat graph";
    grid-template-rows: 38px 1fr;
    grid-template-columns: 1fr 1fr;  
`
const MonthReportContainerShadow = styled(Div)`
    position: absolute;
    top: 4px;
    left: -0.1px;
    
    width: 255px;
    height: 111px;

    border-radius: 20px;
    background: #FFFFFF;

    filter: drop-shadow(0px 3px 6px #6C78DE);
    z-index: -1;
`
const ReportTitle = styled(Div)`
    grid-area: title;

    width: 235px;
    height: 18px;

    font-weight: 300;
    font-size: 15px;
    line-height: 17px;
    text-align: center;

    border-bottom: 0.5px solid #707070;

    color: #000000;
`
const ReportStat = styled(Div)`
    grid-area: stat;

    position: relative;
    top: 5px;
    left: 13px; 

    width: 101px;
    height: 42px;

    font-weight: bold;
    font-size: 25px;
    line-height: 28px;

    color: #0F26F2;
`
const ReportGraph = styled(Div)`
    grid-area: graph;

    position: absolute;
    top: 5px; 
    right: 0px;
    
    width: 100px;
    height: 22px;
`
const Graph = styled.img`
    position: absolute;
    ${ props => props.shadow && css `
        top: 5px;
    `};
    src: ${props => props.src || ""};
`

const InboxContainer = styled(Div)`
    position: absolute;
    width: 300px;
    height: 103px;
    left: 515px;
    top: 916px;

    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 15px;

    display: grid;
    grid-template-areas: "title date";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;  

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
`
const InboxTitle = styled(Div)`
    position: absolute;
    top: 43px;
    left: 40px;

    font-size: 20px;
    line-height: 24px;
    
    color: #929292;
`
const InboxDate = styled(Div)`
    position: absolute;
    top: 24px;
    right: 20px;

    font-size: 40px;
    line-height: 48px;

    color: #593636;
`

class DashBoard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            searchInput: "",
            Notes: [
                {
                    title: "title1",
                    text: "Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor sit am"
                },
                {
                    title: "title2",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    title: "title3",
                    text: "Lorem ipsum dolor sit am"
                },
                {
                    title: "title4",
                    text: "Lorem ipsum dolor sit am"
                }
            ],
            Notifications: [
                {
                    imageUrl: "#FFD9D9",
                    username: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "3 minutes ago"
                },
                {
                    imageUrl: "#BA99FF",
                    username: "Teacher",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "3 minutes ago"
                },
                {
                    imageUrl: "#D9FFE1",
                    username: "Student",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "3 minutes ago"
                },
                {
                    imageUrl: "#F5E764",
                    username: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "4 minutes ago"
                },
                {
                    imageUrl: "#BA99FF",
                    username: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "6 minutes ago"
                },
                {
                    imageUrl: "#D9FFE1",
                    username: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "6 minutes ago"
                },
                {
                    imageUrl: "#FFD9D9",
                    username: "Teacher",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "7 minutes ago"
                }
            ],
            Events: [
                {
                    date: 26,
                    title: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "3 days ago"
                },
                {
                    date: 25,
                    title: "Student",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "1 day ago"
                },
                {
                    date: 25,
                    title: "Teacher",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "5 day ago"
                },
                {
                    date: 24,
                    title: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "2 days ago"
                },
                {
                    date: 23,
                    title: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "4 days ago"
                },
                {
                    date: 23,
                    title: "Admin",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "3 days ago"
                },
                {
                    date: 22,
                    username: "Teacher",
                    text: "Your faculty uploaded the syllabus.",
                    timestamp: "7 days ago"
                }
            ],
            displayNotes: true,
            displaySelectedNote: false,
            selectedNoteIndex: null,
            selectedNote: {},
            editNote: false,
            addNewNote: false,
            newNote: {
                title: "",
                text: ""
            },
            isNotificationOpen: true
        }
    }

    handleSearchInputChange = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }
    handleNoteDisplay = (index) => (e) => {
        var selectedNote = Object.assign({}, this.state.Notes[index])
        this.setState({
            displayNotes: false,
            displaySelectedNote: true,
            selectedNoteIndex: index,
            selectedNote: selectedNote
        })
    }
    handleDeleteNoteButtonClick = () => {
        var updatedNotes = Object.assign([], this.state.Notes)
        const {selectedNoteIndex} = this.state
        updatedNotes.splice(selectedNoteIndex, 1);
        this.setState({
            Notes: updatedNotes
        },() => this.handleNotepadBackButtonClick() )
    }
    handleEditNote = () => {
        const {selectedNoteIndex} = this.state
        var selectedNote = Object.assign({}, this.state.Notes[selectedNoteIndex])
 
        this.setState({
            displayNotes: false,
            displaySelectedNote: false,
            editNote: true,
            newNote: selectedNote
        })
    }

    handleNotepadBackButtonClick = () => {
        this.setState({
            displayNotes: true,
            displaySelectedNote: false,
            selectedNoteIndex: null,
            selectedNote: {}
        })
    }
    
    handleAddNoteButtonClick = () => {
        this.setState({
            displayNotes: false,
            addNewNote: true
        })
    }
    handleNewNoteTitleInputChange = (e) => {
        this.setState({
            newNote: {...this.state.newNote,
                title: e.target.value
            }
        })
    }
    handleNewNoteTextInputChange = (e) => {
        this.setState({
            newNote: {...this.state.newNote,
                text: e.target.value
            }
        })
    }
    handleSaveNewNoteButtonClick = () => {
        const {addNewNote, editNote, newNote} = this.state
        if(addNewNote) {
            if(newNote.title === "") {
                alert('enter title!')
            }
            else if(newNote.text === "") {
                alert('enter text!')
            }
            else {
                this.setState({ 
                    Notes: [newNote, ...this.state.Notes]
                },() => this.handleNotepadCancelButtonClick() )
            }
        }
        else if(editNote) {
            const {selectedNoteIndex, newNote} = this.state
            var updatedNotes = [...this.state.Notes]
            updatedNotes[selectedNoteIndex] = newNote
            this.setState({ 
                Notes: updatedNotes
            },() => this.handleNotepadCancelButtonClick() )
        }
    }

    handleNotepadCancelButtonClick = () => {
        this.setState({
            displayNotes: true,
            addNewNote: false,
            editNote: false,
            newNote: {
                title: "",
                text: ""
            }
        })
    }

    showAppointments = (e) => {
        e.stopPropagation();
        this.setState({ isNotificationOpen: true})
    }
    showEvents = (e) => {
        e.stopPropagation();
        this.setState({ isNotificationOpen: false })
    }
    render() {
        const {searchInput, Notes, isNotificationOpen, Notifications, Events} = this.state
        const {displayNotes, displaySelectedNote, selectedNote, editNote, addNewNote, newNote } = this.state

        var NOTIFICATIONS, EVENTS
        if(isNotificationOpen) {
            NOTIFICATIONS = Notifications.map((n, i) => {
                return (
                    <Notification key={`notification_${i}`}>
                        <Image imageUrl={n.imageUrl}/>
                        <Body>
                            <Username> {n.username} </Username>
                            <Text> {n.text} </Text>
                            <Timestamp> {n.timestamp} </Timestamp>
                        </Body>
                    </Notification>
                )
            })
        }
        else {
            EVENTS = Events.map((e, i) => {
                return (
                    <Notification key={`event_${i}`}>
                        <Image Event> {e.date} </Image>
                        <Body>
                            <Username> {e.title} </Username>
                            <Text> {e.text} </Text>
                            <Timestamp> {e.timestamp} </Timestamp>
                        </Body>
                    </Notification>
                )
            })
        }

        var NOTES = Notes.map((note, i) => {
            var displayTitle = note.title 
            var displayText = ""
            if(displayTitle.length > 40 ) {
                displayTitle = displayTitle.substring(0, 40) + "..."
            }
            else {
                var dispTitleLen = displayTitle.length
                displayText = note.text.substring(0, (35-dispTitleLen)) 
                if(note.text.length > 35-dispTitleLen) displayText += "..."
            }
            return (
                <Note  key={`note_${i}`} onClick={(e) => this.handleNoteDisplay(i)(e)}> 
                    <NoteTitle> {displayTitle} </NoteTitle> 
                    {displayText}
                </Note>
            )
        })

    return (
            <DisplayContainer>
                <SearchInputContainer>
                    <SearchIcon>
                        <img src={search} alt="search icon" />
                    </SearchIcon>
                    <SearchInput
                        id="SearchInput"
                        value={searchInput}
                        placeholder="Search"
                        onChange={this.handleSearchInputChange}
                        type="text"
                    />
                </SearchInputContainer>

                <SalesReportContainer id="SalesReportContainer" >
                    <SalesGraphTitle> Sales Report <span style={{color: "grey"}}>December 2020</span></SalesGraphTitle>
                    <SalesGraphContainer>
                    {
                        <img src={salesreport} alt="sales report"/>
                    
                    // <svg width="755" height="280" viewBox="0 0 755 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    //     <path d="M0 278.548C0 278.548 29.2699 215.661 52.6955 202.816C67.6778 194.601 70.6128 207.174 106.383 181.713C142.154 156.252 138.562 126.63 160.532 126.63C182.502 126.63 210.848 133.576 216.527 147.152C225.907 169.579 246.875 185.667 270.294 185.667C293.714 185.667 317.483 196.757 324.116 196.757C344.504 196.757 367.807 174.204 377.22 149.432C385.982 126.373 398.4 104.111 414.624 104.111C422.897 104.111 426.739 107.218 431.887 111.834C447.679 125.995 453.117 156.8 484.324 152.37C515.532 147.939 520.944 109.159 539.562 96.3204C545.804 92.0161 553.868 89.2924 560.665 89.2924C577.449 89.2924 576.572 104.111 591.928 102.855C606.28 101.681 633.368 79.2996 646.513 70.7786C659.658 62.2575 668.138 26.4231 701.405 26.4231C727.903 26.4231 752.514 0.51709 755 0.51709" stroke="#FF6C40" strokeWidth="4" strokeLinecap="round"/>
                    // </svg>
                    }
                        
                    </SalesGraphContainer>
                    <SalesTextContainer>
                        <SalesTextContainerDate>23 Dec</SalesTextContainerDate>
                        <StatsContainer>
                            <StatTile background="#FFE700">
                                <TileAmount>$1,204.33</TileAmount>
                                <TileText>Revenue</TileText>
                            </StatTile>
                            <StatTile  background="#1FFD77">
                                <TileAmount>33</TileAmount>
                                <TileText>Quotations</TileText>
                            </StatTile>
                        </StatsContainer>
                    </SalesTextContainer>
                </SalesReportContainer>

                <NotificationEventContainer
                    id="NotificationEventContainer" >
                    <HeaderContainer id="HeaderContainer" >
                        <Header 
                            left 
                            active={isNotificationOpen} 
                            onClick={this.showAppointments}
                        >
                            <HeaderText> Notification </HeaderText>
                        </Header>
                        <Header 
                            right 
                            active={!isNotificationOpen}  
                            onClick={this.showEvents} 
                        >
                            <HeaderText> Events </HeaderText>
                        </Header>
                    </HeaderContainer>
                    <DisplayWrapper id="DisplayWrapper" >
                        <NEDisplayContainer>
                            <ViewAllButton> view all </ViewAllButton>
                            <NEDisplayScreen>
                                <ListContainer>
                                    { isNotificationOpen ? NOTIFICATIONS : EVENTS}
                                </ListContainer>
                            </NEDisplayScreen>
                        </NEDisplayContainer>
                    </DisplayWrapper>
                </NotificationEventContainer>

                <NotePadContainer id="NotePadContainer" >
                    {displayNotes ? (
                        <React.Fragment>
                        {
                            // <AddEditNoteButton onClick={this.handleAddNoteButtonClick}>+</AddEditNoteButton>
                        }
                            <NotePadButton1 bottom onClick={this.handleAddNoteButtonClick}> + </NotePadButton1>
                            <NotePadHeader> NotePad </NotePadHeader>
                            <NotePadDisplayContainer>
                                <NotePadDisplayScreen>
                                    <NotesContainer>
                                        {NOTES}
                                    </NotesContainer>
                                </NotePadDisplayScreen>
                            </NotePadDisplayContainer>
                        </React.Fragment>
                    ) : null }

                    {displaySelectedNote ? (
                        <React.Fragment>
                        {
                            // <BackButton onClick = {this.handleNotepadBackButtonClick}> 
                            //     <img src={back} alt="back button"/>
                            // </BackButton>
                            // <AddEditNoteButton onClick={this.handleEditNote}> 
                            //     <img src={pencil} alt="edit note buttton"/>
                            // </AddEditNoteButton>
                        }
                            <NotePadButton2 left onClick = {this.handleNotepadBackButtonClick}> 
                                <img src={back} alt="back button"/>
                            </NotePadButton2>
                            <NotePadButton1 top onClick={this.handleDeleteNoteButtonClick}>
                                <img src={deleteIcon} alt="Delete Note button" />
                            </NotePadButton1>
                            <NotePadButton1 bottom onClick={this.handleEditNote}> 
                                <img src={pencil} alt="edit note buttton"/>
                            </NotePadButton1>
                            <FullNoteDisplayTitle> {selectedNote.title} </FullNoteDisplayTitle>
                            <NotePadDisplayContainer>
                                <NotePadDisplayScreen>
                                    <FullNoteTextDisplay>
                                        {selectedNote.text}
                                    </FullNoteTextDisplay>
                                </NotePadDisplayScreen>
                            </NotePadDisplayContainer>
                        </React.Fragment>
                    ) : null }

                    {addNewNote || editNote ? (
                        <React.Fragment>
                        {
                            // <CancelButton onClick = {this.handleNotepadCancelButtonClick}> x </CancelButton>
                            // <AddEditNoteButton onClick={this.handleSaveNewNoteButtonClick}> 
                        }
                            <NotePadButton2 right onClick = {this.handleNotepadCancelButtonClick}> x </NotePadButton2>
                            <NotePadButton1 bottom onClick={this.handleSaveNewNoteButtonClick}> 
                                <img src={save} alt="save note"/>
                            </NotePadButton1>
                            <NoteTitleInput
                                id="NewNoteTitleInput"
                                value={newNote.title}
                                placeholder="title..."
                                onChange={this.handleNewNoteTitleInputChange}
                                maxLength="16"
                            />
                            <NoteTextInput
                                id="NewNoteTextInput"
                                value={newNote.text}
                                placeholder="write text here..."
                                onChange={this.handleNewNoteTextInputChange}
                            />
                        </React.Fragment>
                    ) : null }
                </NotePadContainer>

                <GraphContainer id="GraphContainer" >
                    <img src={Frame} alt="graph"/>
                </GraphContainer>

                <MonthReportContainer id="MonthReportContainer" top="635px">
                    <MonthReportContainerShadow/>
                    <ReportTitle> This Month </ReportTitle>
                    <ReportStat> +7.8% </ReportStat>
                    <ReportGraph> 
                        <Graph src={thismonthgraph} />
                        <Graph shadow src={thismonthgraphshadow} />
                    </ReportGraph>
                </MonthReportContainer>

                <MonthReportContainer id="LastMonthReportContainer" top="768px">
                    <MonthReportContainerShadow/>
                    <ReportTitle> Last Month </ReportTitle>
                    <ReportStat> +67.4% </ReportStat>
                    <ReportGraph> 
                        <Graph src={lastmonthgraph} />
                        <Graph shadow src={lastmonthgraphshadow} />
                    </ReportGraph>
                </MonthReportContainer>

                <InboxContainer id="InboxContainer" >
                    <InboxTitle> Inbox </InboxTitle>
                    <InboxDate> 24 </InboxDate>
                </InboxContainer>
            </DisplayContainer>
        )
    }
}

export default DashBoard


















// import React, { Component } from 'react';
// import styled, {css} from 'styled-components'

// import dashboard from './images/dashboard.png';
// import lorem from './images/lorem.png';
// import ipsum from './images/ipsum.png';

// const Div = styled.div`
//     scroll-behavior: smooth;
//     &::--webkit-scrollbar {
//         display: none;
//     }
//     scrollbar-width: none;
// `

// const LayoutWrapper = styled(Div)`
//     position: fixed;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;

//     width: 100vw;
//     height: 100vh;

//     overflow: scroll;
// `
// const LayoutContainer = styled(Div)`
//     position: relative;

//     width: 1804px;
//     height: 1084px;

//     overflow: hidden;
//     background: #F2F2F2;
// `
//     //place-items: stretch
//     //place-content: stretch

//     //display: grid
//     //grid-template-areas: "header"
//     //                     "map";
//     //grid-template-rows: 10px 1fr;
//     //grid-template-columns: 100vw  

// const Menu = styled(Div)`
//     position: absolute;
//     left: 0px;
//     top: 0px;
//     width: 315px;
//     height: 1084px;

//     background: #FF6C40;
//     padding-top: 7px;   
    
//     display: flex;
//     flex-direction: column;
//     flex-wrap: nowrap;
// `
// const MenuItem = styled(Div)`
//     width: 315px;
//     height: 82px;

//     ${props =>
//         props.selected === true && css`
//             background: #FFC480;
//             `}
//     display: grid;
//     grid-template-areas: "icon title";
//     grid-template-rows: 1fr;
//     grid-template-columns: 96px 1fr; 
// `
// // const IconContainer = styled(Div)`
// //     grid-area: icon;
// // `
// const Icon = styled.img`
//     grid-area: icon;

//     width: 36px;
//     height: 36px;
//     margin: auto;
// `

// const Title = styled(Div)`
//     grid-area: title; 
    
//     font-family: SF Pro Display;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 30px;
//     line-height: 36px;
//     align-self: center;

//     color: #FFFFFF;
// `
// const Input = styled.input`
//     position: absolute;
//     top: 42px;
//     left: 88px; //393px;

//     width: 836px;
//     height: 36px;
    
//     background: #E2E2E2;
//     border: 2px solid #E2E2E2;
//     box-sizing: border-box;
//     box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
//     border-radius: 12px;
// `;

// const DisplayContainer = styled(Div)`
//     position: absolute;
//     top: 0px;
//     right: 0px;
//     width: 1489px;
//     height: 1084px;

//     border: 0.2px solid green;
// `


// const SalesReportContainer = styled(Div)`
//     position: absolute;
//     width: 1029px;
//     height: 495px;
//     left: 62px; //377px;
//     top: 105px;

//     border: 1px dashed red;
// `
// const NotificationEventContainer = styled(Div)`
//     position: absolute;
//     width: 331px;
//     height: 677px;
//     left: 1123px; //1438px;
//     top: 105px;

//     background: #FFFFFF;
//     border-radius: 15px 15px 0px 0px;

//     display: grid
//     grid-template-areas: "headerContainer"
//                          "displayContainer";
//     grid-template-rows: 53px 1fr;
//     grid-template-columns: 1fr;  
// `
// const HeaderContainer = styled(Div)`
//     grid-area: headerContainer;

//     border: 1px dashed black;
// `
// const ContainerDisplay = styled(Div)`
//     grid-area: displayContainer;

//     border: 1px dashed black;
// `

// const NotePadContainer = styled(Div)`
//     position: absolute;
//     width: 425px;
//     height: 385px;
//     left: 62px; //377px;
//     top: 634px;

//     background: #FFFFFF;
//     border-radius: 15px;

//     border: 1px dashed red;
// `
// const GraphContainer = styled(Div)`
//     position: absolute;
//     width: 323px;
//     height: 252px;
//     left: 505px; //820px;
//     top: 631px;
    
//     border: 1px dashed green;
// `
// const MonthReportContainer = styled(Div)`
//     position: absolute;
//     width: 255px;
//     height: 111px;
//     left: 835px; //1150px;
//     top: 635px;
    
//     border: 1px dashed green;
// `
// const LastMonthReportContainer = styled(Div)`
//     position: absolute;
//     width: 255px;
//     height: 111px;
//     left: 835px; //1150px;
//     top: 768px;
    
//     border: 1px dashed green;
// `
// const InboxContainer = styled(Div)`
//     position: absolute;
//     width: 300px;
//     height: 103px;
//     left: 505px; //820px;
//     top: 916px;
    
//     border: 1px dashed red;
// `
// const name = styled(Div)`
// `
// class HomePage extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             menuItems: ["DashBoard", "Lorem", "Ipsum"],
//             menuIcons: [dashboard, lorem, ipsum],
//             selectedMenuItem: 0
//         }
//     }
//     handleMenuItemToggle = (index) => (e) => {
//         this.setState({ selectedMenuItem: index });
//     }
//     render() {
//         const {selectedMenuItem} = this.state
//         const {menuItems, menuIcons} = this.state
//         const MENUITEMS = menuItems.map((title, i) => {
//             var isSelected = false
//             if(selectedMenuItem === i) isSelected = true
//             return (
//                 <MenuItem selected={isSelected} 
//                     onClick={(e) => {
//                         if(isSelected !== true) {
//                             e.stopPropagation();
//                             this.handleMenuItemToggle(i)(e)
//                         }
//                     }} 
//                 >
//                     <Icon src={menuIcons[i]} ></Icon>
//                     <Title> {title} </Title>
//                 </MenuItem>
//             )
//         })



//         return (
//             <LayoutWrapper>
//                 <LayoutContainer>
                
//                     <Menu id="Menu" >       
//                         { MENUITEMS }
//                     </Menu>
//                     <DisplayContainer>
//                         <Input
//                             id="SearchInput"
//                             defaultValue="Search"
//                             type="text"
//                         >
//                         </Input>
//                         <SalesReportContainer
//                             id="SalesReportContainer" >
//                         </SalesReportContainer>

//                         <NotificationEventContainer
//                             id="NotificationEventContainer" >
//                             <HeaderContainer
//                                 id="HeaderContainer" >
//                             </HeaderContainer>
//                             <ContainerDisplay
//                                 id="DisplayContainer" >
//                             </ContainerDisplay>
//                         </NotificationEventContainer>

//                         <NotePadContainer
//                             id="NotePadContainer" >
//                         </NotePadContainer>

//                         <GraphContainer
//                             id="GraphContainer" >
//                         </GraphContainer>

//                         <MonthReportContainer
//                             id="MonthReportContainer" >
//                         </MonthReportContainer>

//                         <LastMonthReportContainer
//                             id="LastMonthReportContainer" >
//                         </LastMonthReportContainer>

//                         <InboxContainer
//                             id="InboxContainer" >
//                         </InboxContainer>
//                     </DisplayContainer>
//                 </LayoutContainer>
//             </LayoutWrapper>
//         )
//     }
// }

// export default HomePage
