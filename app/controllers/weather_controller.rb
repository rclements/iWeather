require 'forecast_io'
class WeatherController < ApplicationController

  def index
    @coords = JSON.parse(params[:coords])
    binding.pry
    @forecast = ForecastIO.forecast(@coords[0], @coords[1], time: @coords[2])
    #@forecast = weather["forecast"]["txt_forecast"]
    @hash = Gmaps4rails.build_markers(["36.1667,-86.7833"]) do |coords, marker|
      marker.lat coords.split(",")[0]
      marker.lng coords.split(",")[1]
    end
    respond_to do |format|
      format.html do
      end
      format.json do
        render json: {x_y: @forecast["forecastday"]}
      end
    end
  end

end
