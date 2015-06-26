Rails.application.routes.draw do
  get 'site/index'

  devise_for :users
  match '/404' => 'errors#not_found'            , :via => [:get, :post]
  match '/422' => 'errors#unprocessable_entity' , :via => [:get, :post]
  match '/500' => 'errors#application_error'    , :via => [:get, :post]
  root :to => 'weather#index'
end
