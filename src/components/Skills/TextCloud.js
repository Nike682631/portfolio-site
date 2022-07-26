import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const TextCloud = () => {
  const IsTagCloudLoaded = useRef(false);

  useEffect(() => {
    const Tags = [
      'Python',
      'Javascript',
      'HTML',
      'CSS',
      'Tailwind',
      'SASS',
      'Dart',
      'Flutter',
      'React JS',
      'Firebase',
      'Azure',
      'XD',
      'Figma',
      'Linux',
      'JSON',
      'git',
      'Vscode',
    ];

    if (IsTagCloudLoaded.current) return;

    TagCloud('.content', Tags, {
      radius: 350,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    });

    IsTagCloudLoaded.current = true;
  }, []);

  return (
    <div className="TextCloud">
      <div className="right">
        <span
          className="content"
          onClick={(e) =>
            window.open(
              `https://www.google.com/search?q=${e.currentTarget.innerText}`,
              '_blank'
            )
          }
        ></span>
      </div>
    </div>
  );
}

export default TextCloud;