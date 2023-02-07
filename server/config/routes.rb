Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'users#index'
  get '/users', to: 'users#index'
  get '/me', to: 'users#me'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'
  patch '/update', to: 'users#update'
  delete '/destroy', to: 'users#destroy'
  get '/users/:id', to: 'users#show'
end
