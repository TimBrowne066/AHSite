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

    respond_to do |format|
      if @job.save
        format.html { redirect_back(fallback_location: admin_root_path ) }
        format.json { redirect_back(fallback_location: admin_root_path ) }
      end
    end
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
    params.require(:job).permit(:title, :summary, :description, :expectations, :requirements, :city, :state, :zipcode, :created_at, :updated_at)
  end
end
