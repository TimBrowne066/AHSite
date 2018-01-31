/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import ReactOnRails from 'react-on-rails';
import HomeContainer from '../containers/homeContainer'
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import JobsContainer from '../containers/jobsContainer';
import JobShowContainer from '../containers/jobShowContainer';
import AboutContainer from '../containers/aboutContainer';
import ContactContainer from '../containers/contactContainer';

ReactOnRails.register({
  HomeContainer, NavBar, JobsContainer, JobShowContainer, AboutContainer, ContactContainer,
});
