require 'formtastic'

ActiveAdmin.register_page "Dashboard" do

  menu priority: 1, label: proc{ I18n.t("active_admin.dashboard") }

  content title: proc{ I18n.t("active_admin.dashboard") } do
    # div class: "blank_slate_container", id: "dashboard_default_message" do
    #   span class: "blank_slate" do
    #     span I18n.t("active_admin.dashboard_welcome.welcome")
    #     small I18n.t("active_admin.dashboard_welcome.call_to_action")
      # end
    # end


    columns do
      column do
        panel "Current Jobs" do
          ul do
            Job.all.map do |job|
              li job.title
              li link_to "Delete", job_path(job), :method => :delete, :data => {:confirm => "Are you sure?"}
            end
          end
        end
      end

      column do
        panel "Applications" do
          ul do
            Job.all.map do |job|
              li job.title
            end
          end
        end
      end
    end

    columns do
      column do
        panel "New Job Post" do
          form_for Job.new, :url => jobs_path, action: :create, :class => 'form-class' do |f|
            f.label :title
            f.text_field :title
            f.label :city
            f.text_field :city
            f.label :state
            f.text_field :state
            f.label :zipcode
            f.text_field :zipcode
            f.label :summary
            f.text_area :summary
            f.label :description
            f.text_area :description
            f.label :expectations
            f.text_area :expectations
            f.label :requirements
            f.text_area :requirements
            f.submit
          end
        end
      end
    end
  end # content
end

ActiveAdmin.register Job  do
  controller do
    def permitted_params
      params.permit :utf8, :submit, :job, :commit, :id,
                model: [:title, :summary, :description, :expectations, :requirements, :city, :state, :zipcode, :created_at, :updated_at]
    end
  end
end
