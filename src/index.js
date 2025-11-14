import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { AuthProvider } from './hooks/useAuth';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import RecipeLibraryPage from './pages/RecipeLibraryPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import CreateRecipePage from './pages/CreateRecipePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/recipes" component={RecipeLibraryPage} />
            <Route path="/recipes/:id" component={RecipeDetailPage} />
            <Route path="/create" component={CreateRecipePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </MainLayout>
      </Router>
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById('root')
);
