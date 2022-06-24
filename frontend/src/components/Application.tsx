import React, {FC} from 'react';
import {QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {Container} from "../styles";
import {queryClient} from "../config/queryClient";

const Application: FC = ({children}) => (
  <Container>
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </Container>

);

export default Application;
