import styled from "styled-components";
import { HiUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";

const Signuppage = () => {
  return (
    <div>
      <Container>
        <Main>
          <Top>
            <HiUserGroup color="white" size={80} />
          </Top>
          <Up>
            <Left to="/auth/signup">Login</Left>
          </Up>
          <Mid>
            <Holder>
              <Input placeholder="Enter Username" type="text" />
              <Error>Invalid Username</Error>
            </Holder>
            <Holder>
            <Input placeholder="Enter Name" type="text" />
            <Error>Invalid name</Error>
            </Holder>
            <Holder>
            <Input placeholder="Enter Email" type="text" />
            <Error>Invalid email address</Error>
            </Holder>
        <Holder>
        <Input placeholder="Enter Password" type="password" />
        <Error>Invalid Password</Error>
        </Holder>
            <Holder>
            <Input placeholder="Confirm Password" type="password" />
            <Error>Password Not a match</Error>
            </Holder>
          </Mid>
          <Check>
            <input type="checkbox" />
            By checking this box, you accept the terms and condition
          </Check>
            <Button>Signin</Button>
          <All>
            Already have an account? <Nav to="/auth/signin">Signin</Nav>
          </All>
        </Main>
      </Container>
    </div>
  );
};

export default Signuppage;

const Holder = styled.div`
  color: red;
  font-size: 9px;
  width: 100%;
`;
const Error = styled.div`
  color: red;
  font-size: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 4px;
  color: white;
  cursor: pointer;
  background-color: green;
  border: none;
`;

const All = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

const Nav = styled(Link)`
  text-decoration: none;
`;

const Check = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Hold = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  width: 95%;
  height: 35px;
  background-color: #e6e6e6;
  border-radius: 20px;
  border: none;
  margin-top: 5px;
  outline: none;
  padding-left: 10px;

  ::placeholder {
    text-align: center;
  }
`;

const Mid = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

const Left = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

const Up = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Top = styled.div`
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000); /*IE 5.5-7*/
  width: 120px;
  height: 100px;
  border-radius: 15px 15px 100px 100px;
  border: 1px solid black;
  margin-top: -40px;
  border: none;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 470px;
  border-radius: 10px;
  background: white;
  -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000)"; /*IE 8*/
  -moz-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*FF 3.5+*/
  -webkit-box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
  box-shadow: 2px 2px 15px -3px rgba(0, 0, 0, 0.2); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
  filter: progid:DXImageTransform.Microsoft.Shadow(Strength=15, Direction=135, Color=#000000); /*IE 5.5-7*/
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f8f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
