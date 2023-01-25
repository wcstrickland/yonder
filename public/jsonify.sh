for dir in */;do
    cd $dir
    for f in *;do
        xToJ $f
    done
    cd ../
done
