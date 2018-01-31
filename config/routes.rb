Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: "home#show"
  resources :jobs do
  end
  resource :about, only: [:show]
  resource :contact_us, only: [:show]
end
