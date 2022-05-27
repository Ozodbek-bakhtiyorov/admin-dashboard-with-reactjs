import styled from 'styled-components'
export const Wrapper = styled.div`
    position:absolute;
    right: 10px;
    top:50px; 
    background-color: #19162c;
    border-radius: 0.5em;
    width:180px; 
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    z-index: 1;
    transition: all 1s cubic-bezier(.17,.67,.83,1.39);
    transform: translateX(300px);
    ul{
        width:100%;
        height: 100%;
        li{
            margin:5px 0;
            width:100%;
            padding:10px 20px;
            color:#757380;
            text-align: left;
            cursor:pointer;
            transition: all 0.3s ease-in-out;
            &:hover{
                background-color: #121026;
                color:#f1f1f1;
                transform:scale(1.1);
            }
        }
    }
    &::after{
        position:absolute;
        content:'';
        width:10px;
        height:10px;
        background-color: #19162c;
        top:-5px;right:10px;
        transform:rotate(45deg)
    }

`;