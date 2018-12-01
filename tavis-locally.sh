# https://stackoverflow.com/questions/21053657/how-to-run-travis-ci-locally
# https://docs.travis-ci.com/user/common-build-problems/#troubleshooting-locally-in-a-docker-image
# https://stackoverflow.com/questions/21053657/how-to-run-travis-ci-locally
BUILDID="build-$RANDOM"
INSTANCE="travisci/ci-garnet:packer-1515445631-7dfb2e1"
docker run --name $BUILDID -dit $INSTANCE /sbin/init
echo "docker exec -it $BUILDID bash -l"