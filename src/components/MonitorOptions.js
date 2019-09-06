import React from 'react';

const MonitorOptions = ({
  monitor,
  onDiagonalChange,
  onBezelWidthChange,
  onBezelColorChange,
  onOrientationChange,
  onAspectRatioChange,
  onResolutionChange,
  onHorResChange,
  onVerResChange,
  onDisplayTypeChange,
  onSyncTypeChange,
  onRefreshRateChange,
  onResponseTimeChange,
  onHdrChange,
  onSrgbChange,
  onCurvedChange,
  onWebcamChange,
  onTouchChange,
  onSpeakersChange,
  onHdmiChange,
  onDisplayPortChange,
  onUsbcChange,
  onVgaChange,
  onDviChange,
  onBrandChange,
  onPriceChange,
  onLinkChange
}) => {

  return (
    <div className="monitorOptions maxw-450px">
      <h3>Size</h3>
      <div id="sizeOptions" className="text-center">
        <p>
          <label>Diagonal:</label>
          <input onChange={onDiagonalChange.bind(this, monitor.index)} value={monitor.options.basic.diagonal} type="number" min="1" max="100" step="1" name="diagonal" className="maxw-3rem t-center inline" /><span> "</span>
        </p>
        <p>
          <label>Bezel Width:</label>
          <input onChange={onBezelWidthChange.bind(this, monitor.index)} value={monitor.options.basic.bezelWidth} type="range" min="0.0" max="2" step="0.25" name="bezelWidth" className="maxw-8rem t-center inline m" title={monitor.options.basic.bezelWidth} />
          <input onChange={onBezelColorChange.bind(this, monitor.index)} value={monitor.options.basic.bezelColor} type="color" className="maxw-1rem inline m" />
        </p>
      </div>
      <h3>Aspect Ratio</h3>
      <div id="aspectRatioOptions" className="text-center">
        <p>
          <label>Orientation:</label>
          <select onChange={onOrientationChange.bind(this, monitor.index)} value={monitor.options.basic.orientation} className="w-10rem t-center">
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
          </select>
        </p>
        <p>
          <label>Aspect Ratio:</label>
          <select onChange={onAspectRatioChange.bind(this, monitor.index)} value={monitor.options.basic.aspectRatio} className="w-10rem t-center">
            <option value="custom">Custom</option>
            <optgroup label="Tall">
              <option value="5:4">5:4</option>
            </optgroup>
            <optgroup label="Wide">
              <option value="16:10">16:10</option>
              <option value="16:9">16:9</option>
            </optgroup>
            <optgroup label="UltraWide">
              <option value="21:9">21:9</option>
              <option value="32:9">32:9</option>
            </optgroup>
            <optgroup label="Others Detected">
              <option value="1:1" hidden>1:1</option>
              <option value="4:3" hidden>4:3</option>
              <option value="3:2" hidden>3:2</option>
              <option value="5:3" hidden>5:3</option>
              <option value="2:1" hidden>2:1</option>
              <option value="32:10" hidden>32:10</option>
            </optgroup>
          </select>
        </p>
      </div>
      <h3>Resolution</h3>
      <div id="resolutionOptions" className="text-center">
        <p>
          <label>Preset:</label>
          <select onChange={onResolutionChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.type} className="w-10rem">
            <option value="custom">Custom</option>
            <option value="SVGA">SVGA ~ 600i</option>
            <option value="HD">HD ~ 768p</option>
            <option value="FHD">FHD ~ 1080p</option>
            <option value="FHD+">FHD+ ~ 1200p</option>
            <option value="QHD">QHD ~ 1440p</option>
            <option value="QHD+">QHD+ ~ 1600p</option>
            <option value="4K">4K ~ 2160p</option>
            <option value="5K">5K ~ 2880p</option>
            <option value="6K">6K ~ 3384p</option>
            <option value="8K">8K ~ 4320p</option>
          </select>
        </p>
        <p>
          <input onChange={onHorResChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.horRes} type="number" className="w-5rem" />
          <span className="p">X</span>
          <input onChange={onVerResChange.bind(this, monitor.index)} value={monitor.options.basic.resolution.verRes} type="number" className="w-5rem" />
        </p>
      </div>
      <h3>Features</h3>
      <div id="featureOptions" className="text-center">
        <p>
          <label>Display Type:</label>
          <select onChange={onDisplayTypeChange.bind(this, monitor.index)} value={monitor.options.advanced.displayType}>
            <option value="" defaultValue>Any</option>
            <option value="ips">IPS</option>
            <option value="tn">TN</option>
            <option value="va">VA</option>
            <option value="oled">OLED</option>
          </select>
        </p>
        <p>
          <label>Sync Type:</label>
          <select onChange={onSyncTypeChange.bind(this, monitor.index)} value={monitor.options.advanced.syncType}>
            <option value="" defaultValue>Any</option>
            <option value="none">None</option>
            <option value="g-sync">G-Sync</option>
            <option value="freesync">FreeSync</option>
          </select>
        </p>
        <p>
          <label>Refresh Rate:</label>
          <input onChange={onRefreshRateChange.bind(this, monitor.index)} value={monitor.options.advanced.refreshRate} type="number" step="5" min="30" max="1000" className="inline" />
          <span>Hz</span>
        </p>
        <p>
          <label>Response Time:</label>
          <input onChange={onResponseTimeChange.bind(this, monitor.index)} value={monitor.options.advanced.responseTime} type="number" step="1" min="1" max="50" className="inline" />
          <span>ms</span>
        </p>
        <div className="grid-3-f text-left px-3rem">
          <p className="nowrap">
            <input onChange={onHdrChange.bind(this, monitor.index)} type="checkbox" name="hdr" checked={monitor.options.advanced.features.hdr} />
            <label className="text-left">HDR</label>
          </p>
          <p className="nowrap">
            <input onChange={onSrgbChange.bind(this, monitor.index)} type="checkbox" name="srgb" checked={monitor.options.advanced.features.srgb} />
            <label className="text-left">sRGB</label>
          </p>
          <p className="nowrap">
            <input onChange={onCurvedChange.bind(this, monitor.index)} type="checkbox" name="curved" checked={monitor.options.advanced.features.curved} />
            <label className="text-left">Curved</label>
          </p>
          <p className="nowrap">
            <input onChange={onWebcamChange.bind(this, monitor.index)} type="checkbox" name="webcam" checked={monitor.options.advanced.features.webcam} />
            <label className="text-left">Webcam</label>
          </p>
          <p className="nowrap">
            <input onChange={onTouchChange.bind(this, monitor.index)} type="checkbox" name="touch" checked={monitor.options.advanced.features.touch} />
            <label className="text-left">Touch</label>
          </p>
          <p className="nowrap">
            <input onChange={onSpeakersChange.bind(this, monitor.index)} type="checkbox" name="speakers" checked={monitor.options.advanced.features.speakers} />
            <label className="text-left">Speakers</label>
          </p>
        </div>
      </div>
      <h3>Ports</h3>
      <div id="portOptions" className="grid-3-f px-3rem">
        <p className="nowrap">
          <input onChange={onHdmiChange.bind(this, monitor.index)} type="checkbox" name="hdmi" checked={monitor.options.advanced.features.hdmi} />
          <label className="text-left">HDMI</label>
        </p>
        <p className="nowrap">
          <input onChange={onDisplayPortChange.bind(this, monitor.index)} type="checkbox" name="displayPort" checked={monitor.options.advanced.features.displayPort} />
          <label className="text-left">Display Port</label>
        </p>
        <p className="nowrap">
          <input onChange={onDviChange.bind(this, monitor.index)} type="checkbox" name="dvi" checked={monitor.options.advanced.features.dvi} />
          <label className="text-left">DVI</label>
        </p>
        <p className="nowrap">
          <input onChange={onVgaChange.bind(this, monitor.index)} type="checkbox" name="vga" checked={monitor.options.advanced.features.vga} />
          <label className="text-left">VGA</label>
        </p>
        <p className="nowrap">
          <input onChange={onUsbcChange.bind(this, monitor.index)} type="checkbox" name="usbc" checked={monitor.options.advanced.features.usbc} />
          <label className="text-left">USB Type-C</label>
        </p>
      </div>
      <h3 className="text-center">Seller Info</h3>
      <div id="sellerInfoOptions" className="text-center">
        <p>
          <label>Brand:</label>
          <input onChange={onBrandChange.bind(this, monitor.index)} value={monitor.options.advanced.sellerInfo.brand} type="text" name="brand" className="w-10rem" />
        </p>
        <p>
          <label>Price:</label>
          <span>$</span>
          <input onChange={onPriceChange.bind(this, monitor.index)} value={monitor.options.advanced.sellerInfo.price} type="number" name="price" step="0.01" min="0" max="999999" />
        </p>
        <p>
          <label>Link:</label>
          <input onChange={onLinkChange.bind(this, monitor.index)} value={monitor.options.advanced.sellerInfo.link} type="url" name="link" />
          <a href={monitor.options.advanced.sellerInfo.link} target="_blank" rel="noopener noreferrer" className="text-center block w-10rem link">
            {monitor.options.advanced.sellerInfo.link.replace('https://', '').replace('http://', '').replace('www.', '').replace('www', '').substring(0, 30)} {monitor.options.advanced.sellerInfo.link.length > 30 ? <span>...</span> : <></>}
          </a>
        </p>
      </div>
    </div>
  );
};

export default MonitorOptions;
