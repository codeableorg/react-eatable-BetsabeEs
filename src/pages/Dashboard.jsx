import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { getProducts } from '../services/product-service';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button';
import { RiEditBoxFill, RiDeleteBin6Fill} from 'react-icons/ri';

const Container = styled.div`
  background-color: #F6F6F9;

  h1{
    text-align: center;
    margin-top:48px;
    margin-bottom: 20px;
    font-size: 22px;
    font-family:"Source Sans Pro";
  }
  }
`;
const DishContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 414px;
  justify-content: center;

  > div {
    width: 166px;
    height: 250px;
    background-color: white;
    border-radius: 30px;
    margin: 9px;

    text-align: center;
  }

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.20);
    background-color: ##000000;
    margin-bottom: 10px;
  }
  p {
    font-size: 22px;
    font-weight: 550;
    width: 160px;
    height: 30px;
  }
  p:nth-of-type(2) {
    color: #fa4a0c;
  }
  }
`;
const StyledFrame = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  background: white;
  padding-left:5px;
  margin-left: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  }
`;
const Dashboard = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const style = { color: "#FA4A0C", fontSize: "16px",background:"white"}
    useEffect(() => {
        getProducts().then((product) => setData(product));
    }, []); 
    /* function showEditPage(id){
      navigate()
    } */ 
  return (
    <div>
        <Container>
          <h1>Products Dashboard</h1>
          <div>
            <DishContainer>
                {data.slice(0,8).map((dish) => (
                    <div key={dish.id}>
                        <img src={dish.picture_url} alt={dish.name} 
                          onClick={()=> navigate(`/${dish.id}/show`)}
                        />
                        <p>{dish.name}</p>
                        <p>${dish.price}</p>
                        <StyledFrame>
                          <Link to={`/${dish.id}/edit`}>
                            <RiEditBoxFill style={style}/>
                          </Link>
                          <Link to={`/${dish.id}/delete`}>
                            <RiDeleteBin6Fill style={style}/>
                          </Link>
                        </StyledFrame>
                    </div>
                ))}
            </DishContainer>
            <ButtonContainer>
              <Link to="/create">
                <Button >Create</Button>
              </Link>
            </ButtonContainer>
          </div>
        </Container>
    </div>   
  )
}

export default Dashboard