class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: :home

  def home
    @Clocks = Clock.all
    @Songs = Song.all
    @Places = Place.all
    @Weathers = Weather.all
  end
end
