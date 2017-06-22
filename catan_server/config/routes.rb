Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tiles
      resources :settlements
      resources :roads
      resources :players
    end
  end
end
