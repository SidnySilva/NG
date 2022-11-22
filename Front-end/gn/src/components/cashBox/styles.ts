import styled from "styled-components"

export const Container = styled.div`
    border: 4px solid #00A9A5;
    display: flex;
    justify-content: space-between;
    margin: 2rem;

    .data{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1rem;
        h2{
            
        }
    }
    .info{
        display: flex;
        flex-direction: column;
        margin:0  1rem;
        .time>span{
            margin:0 5px;
            font-size: 12px;
            display: flex;
            justify-content: flex-end;
            align-self: flex-end;
            
        }
    }
` 