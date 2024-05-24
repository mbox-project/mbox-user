export const shareContent = async (title, text, url) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
        console.log('Content shared successfully');
      } catch (err) {
        console.error('Error sharing content: ', err);
      }
    } else {
      console.log('Web Share API is not supported in this browser.');
    }
  };