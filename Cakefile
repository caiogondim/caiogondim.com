# modules
{spawn, exec} = require('child_process')

# task 'deploy'
task 'deploy', 'Envia o diff do blog para o server', () ->

  # rsync config
  user = "caiogondim"
  remote_root = "~/caiogondim.com/"
  local_root = "./site/"

  # deploy itself
  console.log 'Uploading files...'
  rsync = spawn "rsync", [
    "-avz"
    "--stats"
    "-e"
    "ssh"
    "#{__dirname}/#{local_root}"
    "#{user}@bugsy.dreamhost.com:#{remote_root}"
  ]

  # event triggered on error
  rsync.stderr.on 'data', (data) ->
    console.log "Error on deploy: #{data}"

  # eent triggered when the task is finished
  rsync.on 'exit', (code) ->
    console.log "caiogondim.com updated"