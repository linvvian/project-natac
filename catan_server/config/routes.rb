Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/games', to: 'games#create'
      patch '/games', to: 'games#update'
      resources :tiles, except: [:create, :update]
      patch '/tiles', to: 'tiles#update'
      resources :settlements, only: [:index, :show]
      resources :roads, only: [:index, :show]
      resources :players, except: [:update]
      patch '/players', to: 'players#update'
    end
  end
end
