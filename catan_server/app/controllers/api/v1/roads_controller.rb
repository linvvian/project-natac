class Api::V1::RoadsController < ApplicationController
  def index
    render json: Road.all
  end
end
