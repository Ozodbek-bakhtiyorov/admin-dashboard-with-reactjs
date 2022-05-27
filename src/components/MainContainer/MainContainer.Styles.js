import styled from 'styled-components'

export const Wrapper = styled.div`
    width:100%;
    height: calc(100% - 85px);
    display: flex;
    .left{
        width:70%;
        overflow-y: scroll;
        transition: all .3s cubic-bezier(0.17, 0.67, 0.83, 1.39);
        ::-webkit-scrollbar {display:none};
        .banner{
           height: 260px;
           border-radius: .5rem;
           overflow: hidden;
           box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
           position: relative;
           .textConteiner{
               position:absolute;
               right:20px;
               bottom:20px;
               h1{
                   font-size:3.5rem;
                   color:#f1f1f1;
                   font-weight: 700;
                   margin:5px 0;
               }
               h2{
                   font-size: 2.5rem;
                   color:#b1147d;
                   margin:5px 0;
               }
               p{
                   color:#f1f1f1;
                   font-size:18px;
                   margin:5px 0;
               }
               .bid{
                   display: flex;
                   align-items: center;
                   margin:5px 0;
                   p{
                       span{
                           display: block;
                           color:#b1147d;
                           font-weight: 6000;
                       }
                   }
               }
           }
        }
      
    }
    .cards{ 
            background-color: #19162c;
            padding:10px;
            border-radius:.5rem;
            box-shadow: 0px 0px 20px rgba(0,0,0,.4);
            margin-top: 30px;
            .filters{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding:5px 30px;
                .popular{
                    display: flex;
                    align-items:center;
                    h2{
                        font-size: 20px;
                        font-weight: bold;
                        color:#d1cfd4;
                        margin-right: 10px;
                    }
                }
            }
            main{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
                gap: 15px;
                overflow-y: auto;
                &::-webkit-scrollbar{
                    display: none;
                }
            }
        }
    .right{
        width:30%;
        height: 200px;
        padding:0px 10px;
        padding-left: 20px;
    }
`;

export const MainCardWrapper  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #253041;
    border-radius: .5rem;
    flex-direction: column;
    padding-bottom: 20px;
    .card-name{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:5px 20px;
        h2{
            color: #e9e9ec;
            font-size: 16px;
            font-weight: bold;
        }
        .card-icon{
            display: flex;
            align-items: center;
            align-items: center;
            i{
                color:#b1147d;
                text-shadow: 3px 5px 20px rgba(0,0,0,0.4);
                font-size: 12px;
                span{
                    font-size: 16px;
                    font-weight: bold;
                    color:#e9e9ec;
                    margin-left: 5px;
                }
            }
            
        }
    }
    .stats{
        columns: 2;
        column-rule: 1px solid #adabb8 ;
        text-align: center;
        gap: 1rem;
        margin:15px 0;
        p{
            color:#adabb8;font-weight:bold;font-size:12px;
            span{
                display: block;
                color:#b1147d;
                font-size: 12px;
            }
        }
    }
    .button{
        width: 100%;
     display: grid;
     grid-template-columns: auto auto;
     justify-content: space-between;
        padding:5px 20px;
    }
    .btn{
        font-size: 12px!important;
    }
    img{
    max-width: 100%;
    }
`