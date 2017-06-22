Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tiles, except: [:create, :update]
      patch '/tiles', to: 'tiles#update'
      resources :settlements
      resources :roads
      resources :players
    end
  end
end
