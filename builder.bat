call tizen build-web -- ".\export"
call cd export
call tizen package -t wgt -s btproject -- ".buildResult"
call mv .buildResult ..\.buildResult
call cd ..
call sdb connect 192.168.0.116
call sdb push .buildResult\btproject.wgt /home/owner/share/tmp/sdk_tools/tmp/
call sdb shell 0 vd_appinstall appis /home/owner/share/tmp/sdk_tools/tmp/btproject.wgt
call sdb shell 0 debug Y63nG83NAY.btproject 300