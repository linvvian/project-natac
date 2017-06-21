class Api::V1::SettlementsController < ApplicationController
  def index
    render json: Settlement.all
  end

  def show
    @settlement = Settlement.find(params[:id])
    render json: @settlement
  end
end
