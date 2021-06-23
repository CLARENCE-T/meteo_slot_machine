Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  get 'pages/home'
  root 'pages#home'

  resources :songs, only: [:index] do
    get :availability
  end

end
