Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'
  patch '/update', to: 'users#update'
  delete '/destroy', to: 'users#destroy'
end
