class HomeController < ApplicationController
  def show
    @jobs = Job.all
  end
end
