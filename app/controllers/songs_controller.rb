class SongsController < ApplicationController
  def index
    @Songs = Song.all
    render json: @Songs
  end
end
