Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tiles, except: [:create, :update]
      resources :settlements
      resources :roads
      patch '/tiles', to: 'tiles#update'
    end
  end
end
