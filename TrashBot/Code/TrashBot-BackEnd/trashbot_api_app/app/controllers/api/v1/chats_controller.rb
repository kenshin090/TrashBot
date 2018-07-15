module Api
    module V1
        class ChatsController < ApplicationController
            def index
                
            end
            
            require 'uri'
            require 'net/http'
            def create
                @mensaje = mensaje_params

                t1 = Time.now
                url = URI("https://service-chatbot-example-mguerra.mybluemix.net/api/message")

                http = Net::HTTP.new(url.host, url.port)
                http.use_ssl = true

                request = Net::HTTP::Post.new(url)
                request["Content-Type"] = 'application/json'
                request.body = @mensaje.to_json

                response = http.request(request)
                puts response.read_body

                t2 = Time.now

                # puts "\n"

                # puts @mensaje['input'].to_json

                # puts response

                puts "Tiempo (sec): " + String(t2 - t1)

                obj = JSON.parse(response.read_body)

                render json: obj, status: :created
            end

            private
                def mensaje_params
                    params.require(:mensaje).permit(input: [:text], 
                        context: [:conversation_id, :no_reservation, 
                            system: [:dialog_turn_counter, :dialog_request_counter, :branch_exited, :branch_exited_reason, 
                                dialog_stack: [:dialog_node] ] ])
                end
        end
        
    end
end