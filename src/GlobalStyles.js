import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    outline: none;
}
body{
    font-family:sans-serif;
}
.button1{
    font-size:14px;color:white;font-weight:600;
    background:linear-gradient(#ff21bc,#b21783);
    padding:5px 15px;border-radius:.5rem;
    text-transform:uppercase;
    box-shadow:inset 2px 2px 2px rgba(255,255,255, .4), inset -5px -10px 10px #b1147d;
    margin-right:10px;
}
.button2{
    text-decoration:none;
    font-size:14px;
    font-weight:bold;
    color:#d1d0d5;
    border:2px solid #443b78; 
    border-radius:.5rem;
    padding:5px 15px;
    margin:0px 5px;
}
`;
