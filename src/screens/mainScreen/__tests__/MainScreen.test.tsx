import {render,fireEvent} from "@testing-library/react";
import MainContainer from "../../../container/mainContainer";

it('show user info',()=>{

   const {getByText,getByPlaceholderText,getByTestId}= render(<MainContainer/>)
   //  const showButton = getByText('Войти');
   //
   // const textInputEmail = getByPlaceholderText('Введите e-mail');
   // const textInputPass = getByPlaceholderText('Введите пароль');
   //

   //  const createEmailText = 'mail@mail.ru';
   //  const createPassword = '12345';
   //
   //
   //  fireEvent.change(textInputEmail,createEmailText);
   //  fireEvent.change(textInputPass,createPassword);
   //  fireEvent.submit(showButton);
   //
   //  const showItemMessage = getByText('Вы вошли как:')
   //
   //  expect(showItemMessage).not.toBeNull();


})