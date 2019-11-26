VERSION=1.2.2

all: clean build

clean:
	rm -f iwutoolbox-${VERSION}.xpi

build:
	zip -r iwutoolbox-${VERSION}.xpi chrome.manifest install.rdf chrome
