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
  end # content
end
