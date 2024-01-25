if [ $# -eq 0 ]
then
    echo "PORT should be provided"
    exist 1
fi

PORT=$1

deno run --allow-net server.ts $PORT

