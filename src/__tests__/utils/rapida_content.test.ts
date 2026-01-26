/*
 *  Copyright (c) 2024. Rapida
 *
 *  Unit tests for rapida_content utility functions
 */

import {
  ResponseContentType,
  getResponseContentType,
  fromStr,
  TEXT_CONTENT_FORMAT_RAW,
  TEXT_CONTENT_FORMAT_WORD,
  AUDIO_CONTENT_FORMAT_RAW,
  AUDIO_CONTENT_FORMAT_CHUNK,
  AUDIO_CONTENT_FORMAT_URL,
  IMAGE_CONTENT_FORMAT_RAW,
  IMAGE_CONTENT_FORMAT_URL,
  MULTI_MEDIA_CONTENT_FORMAT_RAW,
  MULTI_MEDIA_CONTENT_FORMAT_URL,
  toTextContent,
  toStreamAudioContent,
  ToContentText,
} from '../../utils/rapida_content';
import { Content } from '../../clients/protos/common_pb';

describe('rapida_content', () => {
  describe('ResponseContentType enum', () => {
    it('should have correct values', () => {
      expect(ResponseContentType.TEXT_CONTENT).toBe('text');
      expect(ResponseContentType.AUDIO_CONTENT).toBe('audio');
      expect(ResponseContentType.IMAGE_CONTENT).toBe('image');
      expect(ResponseContentType.MULTI_MEDIA_CONTENT).toBe('multi');
    });
  });

  describe('Content format constants', () => {
    it('should have correct text format values', () => {
      expect(TEXT_CONTENT_FORMAT_RAW).toBe('raw');
      expect(TEXT_CONTENT_FORMAT_WORD).toBe('word');
    });

    it('should have correct audio format values', () => {
      expect(AUDIO_CONTENT_FORMAT_RAW).toBe('raw');
      expect(AUDIO_CONTENT_FORMAT_CHUNK).toBe('chunk');
      expect(AUDIO_CONTENT_FORMAT_URL).toBe('url');
    });

    it('should have correct image format values', () => {
      expect(IMAGE_CONTENT_FORMAT_RAW).toBe('raw');
      expect(IMAGE_CONTENT_FORMAT_URL).toBe('url');
    });

    it('should have correct multimedia format values', () => {
      expect(MULTI_MEDIA_CONTENT_FORMAT_RAW).toBe('raw');
      expect(MULTI_MEDIA_CONTENT_FORMAT_URL).toBe('url');
    });
  });

  describe('getResponseContentType', () => {
    it('should return correct string for TEXT_CONTENT', () => {
      expect(getResponseContentType(ResponseContentType.TEXT_CONTENT)).toBe('text');
    });

    it('should return correct string for AUDIO_CONTENT', () => {
      expect(getResponseContentType(ResponseContentType.AUDIO_CONTENT)).toBe('audio');
    });

    it('should return correct string for IMAGE_CONTENT', () => {
      expect(getResponseContentType(ResponseContentType.IMAGE_CONTENT)).toBe('image');
    });

    it('should return correct string for MULTI_MEDIA_CONTENT', () => {
      expect(getResponseContentType(ResponseContentType.MULTI_MEDIA_CONTENT)).toBe('multi');
    });
  });

  describe('fromStr', () => {
    it('should return TEXT_CONTENT for "text"', () => {
      expect(fromStr('text')).toBe(ResponseContentType.TEXT_CONTENT);
    });

    it('should return AUDIO_CONTENT for "audio"', () => {
      expect(fromStr('audio')).toBe(ResponseContentType.AUDIO_CONTENT);
    });

    it('should return IMAGE_CONTENT for "image"', () => {
      expect(fromStr('image')).toBe(ResponseContentType.IMAGE_CONTENT);
    });

    it('should return MULTI_MEDIA_CONTENT for "multi"', () => {
      expect(fromStr('multi')).toBe(ResponseContentType.MULTI_MEDIA_CONTENT);
    });

    it('should be case insensitive', () => {
      expect(fromStr('TEXT')).toBe(ResponseContentType.TEXT_CONTENT);
      expect(fromStr('Text')).toBe(ResponseContentType.TEXT_CONTENT);
      expect(fromStr('AUDIO')).toBe(ResponseContentType.AUDIO_CONTENT);
      expect(fromStr('Audio')).toBe(ResponseContentType.AUDIO_CONTENT);
    });

    it('should return TEXT_CONTENT for unknown values and warn', () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

      expect(fromStr('unknown')).toBe(ResponseContentType.TEXT_CONTENT);
      expect(warnSpy).toHaveBeenCalledWith(
        'The content type is not supported. Only text, audio, image, multi'
      );

      warnSpy.mockRestore();
    });
  });

  describe('toTextContent', () => {
    it('should create text content with default format', () => {
      const content = toTextContent('Hello, World!');

      expect(content).toBeInstanceOf(Content);
      expect(content.getContenttype()).toBe('text');
      expect(content.getContentformat()).toBe('raw');
    });

    it('should create text content with specified format', () => {
      const content = toTextContent('Hello, World!', 'word');

      expect(content).toBeInstanceOf(Content);
      expect(content.getContenttype()).toBe('text');
      expect(content.getContentformat()).toBe('word');
    });

    it('should encode string content as Uint8Array', () => {
      const text = 'Test message';
      const content = toTextContent(text);

      const decoded = new TextDecoder().decode(content.getContent() as Uint8Array);
      expect(decoded).toBe(text);
    });

    it('should handle empty string', () => {
      const content = toTextContent('');

      expect(content).toBeInstanceOf(Content);
      const decoded = new TextDecoder().decode(content.getContent() as Uint8Array);
      expect(decoded).toBe('');
    });

    it('should handle unicode characters', () => {
      const text = 'こんにちは世界 🌍';
      const content = toTextContent(text);

      const decoded = new TextDecoder().decode(content.getContent() as Uint8Array);
      expect(decoded).toBe(text);
    });
  });

  describe('toStreamAudioContent', () => {
    it('should create audio content with chunk format from Uint8Array', () => {
      const audioData = new Uint8Array([1, 2, 3, 4, 5]);
      const content = toStreamAudioContent(audioData);

      expect(content).toBeInstanceOf(Content);
      expect(content.getContenttype()).toBe('audio');
      expect(content.getContentformat()).toBe('chunk');
    });

    it('should create audio content from string', () => {
      const audioData = 'audio-data-string';
      const content = toStreamAudioContent(audioData);

      expect(content).toBeInstanceOf(Content);
      expect(content.getContenttype()).toBe('audio');
      expect(content.getContentformat()).toBe('chunk');
    });
  });

  describe('ToContentText', () => {
    it('should return empty string for undefined content', () => {
      expect(ToContentText(undefined)).toBe('');
    });

    it('should return empty string for empty array', () => {
      expect(ToContentText([])).toBe('');
    });

    it('should extract text from text content array', () => {
      const content1 = toTextContent('Hello');
      const content2 = toTextContent('World');

      const result = ToContentText([content1, content2]);

      expect(result).toBe('Hello World');
    });

    it('should filter out non-text content', () => {
      const textContent = toTextContent('Hello');
      const audioContent = toStreamAudioContent(new Uint8Array([1, 2, 3]));

      const result = ToContentText([textContent, audioContent]);

      expect(result).toBe('Hello');
    });

    it('should handle content with decoding errors gracefully', () => {
      const content = new Content();
      content.setContenttype('text');
      content.setContent('invalid' as any); // Invalid content that might cause decode error

      // Should not throw, but return appropriate result
      expect(() => ToContentText([content])).not.toThrow();
    });
  });
});
