class JobsController < ApplicationController
  def index
    @jobs = Job.all
  end

  def show
    @jobs = Job.all
    @job = Job.find(params[:id])
  end

  def new
    @job = Job.new
  end

  def create
    @job = Job.create(job_params)
  end

  def edit
    @job = Job.find(params[:id])
  end

  def update
    @job = Job.find(params[:id])

  end

  def destroy
    @job = Job.find(params[:id])
    @job.destroy
    redirect_to admin_root_path
  end

  private

  def job_params
    params.permit(:id, :title, :summary, :description, :expectations, :requirements, :created_at, :updated_at)
  end
end
