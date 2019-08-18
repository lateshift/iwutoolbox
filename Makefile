VERSION=1.0.0

all: clean build

clean:
	rm -f iwutoolbox-${VERSION}.xpi

build:
	zip -r iwutoolbox-${VERSION}.xpi chrome.manifest install.rdf chrome
